#!/usr/bin/env node

if (!process.env.SKIP_DOTENV) {
  require("dotenv").config();
}

const endpoints = [
  { path: "/movies", expectedStatus: 200 },
  { path: "/theaters", expectedStatus: 200 },
  { path: "/movies/1/reviews", expectedStatus: 200 },
  { path: "/not-a-route", expectedStatus: 404 },
];

function getBaseUrl() {
  const baseUrl = process.env.APP_URL || process.env.SMOKE_BASE_URL;

  if (!baseUrl) {
    throw new Error("Missing APP_URL or SMOKE_BASE_URL for smoke tests.");
  }

  return baseUrl.replace(/\/$/, "");
}

async function checkEndpoint(baseUrl, endpoint) {
  const response = await fetch(`${baseUrl}${endpoint.path}`);

  if (response.status !== endpoint.expectedStatus) {
    throw new Error(
      `GET ${endpoint.path} returned ${response.status}, expected ${endpoint.expectedStatus}`
    );
  }

  console.log(`GET ${endpoint.path} -> ${response.status}`);
}

async function main() {
  try {
    const baseUrl = getBaseUrl();
    console.log(`Running smoke tests against ${baseUrl}`);

    for (const endpoint of endpoints) {
      await checkEndpoint(baseUrl, endpoint);
    }

    console.log("Smoke tests completed successfully.");
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

main();

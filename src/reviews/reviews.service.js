const db = require("../db/connection");

const tableName = "reviews";

async function destroy(review_id) {
    return db("reviews").where({ review_id: review_id }).delete();
}

async function list(movie_id) {
    return db("reviews as r")
        .join("critics as c", "r.critic_id", "c.critic_id")
        .select(
            "r.*",
            "c.critic_id as critic:critic_id",
            "c.preferred_name as critic:preferred_name",
            "c.surname as critic:surname",
            "c.organization_name as critic:organization_name",
            "c.created_at as critic:created_at",
            "c.updated_at as critic:updated_at"
        )
        .where("r.movie_id", movie_id)
        .then((reviews) =>
            reviews.map((review) => {
                const critic = {
                    critic_id: review["critic:critic_id"],
                    preferred_name: review["critic:preferred_name"],
                    surname: review["critic:surname"],
                    organization_name: review["critic:organization_name"],
                    created_at: review["critic:created_at"],
                    updated_at: review["critic:updated_at"],
                };

                // Remove prefixed keys and attach critic object
                return {
                    ...review,
                    critic,
                };
            })
        );
}

async function read(review_id) {
    return db("reviews").where({ review_id: review_id }).first();
}

async function readCritic(critic_id) {
  return db("critics").where({ critic_id }).first();
}

async function setCritic(review) {
  review.critic = await readCritic(review.critic_id);
  return review;
}

async function update(review) {
  return db(tableName)
    .where({ review_id: review.review_id })
    .update(review, "*")
    .then(() => read(review.review_id))
    .then(setCritic);
}

module.exports = {
  destroy,
  list,
  read,
  update,
};

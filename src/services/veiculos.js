import api from "./api";

const JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibWFyY29ha2VybWFuQGhvdG1haWwuY29tIiwiZXhwaXJlcyI6MTY4NzQ4MTY0OS4yMjIzNzQyfQ.z3U87SQ97zlqm3_5kt5ZUAbwLQCAZKqbQjm1qnqZx2Y";

function createHeaders() {
    return {
        headers: {
            Authorization: `Bearer ${JWT_TOKEN}`
        }
    }
}

export async function listVeiculos() {
    const auth = createHeaders()
    const response = await api.get("/veiculos",auth)
    return response.data
}
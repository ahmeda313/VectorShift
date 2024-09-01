from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# List of origins that are allowed to make cross-origin requests.
origins = [
    "http://localhost:3000",  # Your frontend URL   # Add any other origins you need
]

# Add CORSMiddleware to the FastAPI app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows requests from these origins
    allow_credentials=True,  # Allows cookies to be included
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers (Authorization, Content-Type, etc.)
)


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str):
    print(pipeline)
    return {'status': 'parsed'}

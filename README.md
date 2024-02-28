# Workout Tracker API
## General Structure
Exercises are created as templates, followed by the creation of sets, which contain logs of exercises. Each of those
three concepts are held within their respective tables in the database.
## Routes
### GET /workouts
    Returns JSON:
    200 OK: 
        {
            message: "Success", 
            payload: [
                {exercise: "...", lastWeight: xxx.xx, lastReps: x}
            ]
        }       
    500 Error: 
        {
            message: "Error"
        }
> **Note: the *lastWeight* and *lastReps* keys describe the most recent log of the particular exercise.**

### POST /workouts

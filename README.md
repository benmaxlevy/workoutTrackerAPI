# Workout Tracker API
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

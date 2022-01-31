export const GET_JOBS = 'GET_JOBS'
export const GET_ERROR = 'GET_ERROR'

export const getJobsAction = () => {
    return async(dispatch) => {

        try {
            const res = await fetch(`https://strive-jobs-api.herokuapp.com/jobs`)
            if (res.ok) {
                const jobs = await res.json()
                dispatch({
                    type: GET_JOBS,
                    payload: jobs
                })
            } else {
                dispatch({
                    type: GET_ERROR,
                    payload: res.status
                })
                console.log('error')
            }
        } catch (error) {
            console.log("server error")
        }
    }
}
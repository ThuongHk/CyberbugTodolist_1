import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    taskDetailModel: {
        "priorityTask": {
            "priorityId": 1,
            "priority": "High"
        },
        "taskTypeDetail": {
            "id": 1,
            "taskType": "bug"
        },
        "assigness": [
            {
                "id": 68,
                "avatar": "https://ui-avatars.com/api/?name=khải",
                "name": "khải",
                "alias": "khai"
            },
            {
                "id": 69,
                "avatar": "https://ui-avatars.com/api/?name=thoa",
                "name": "thoa",
                "alias": "thoa"
            }
        ],
        "lstComment": [],
        "taskId": 54,
        "taskName": "task 1",
        "alias": "task-1",
        "description": "<p>Before you start work on an issue, you can set a time or other type of estimate to calculate how much work you believe it'll take to resolve it. Once you've started to work on a specific issue, log time to keep a record of it.</p>\n<p>&nbsp;</p>\n<ul>\n<li>Open the issue and select&nbsp;&bull;&bull;&bull; &gt;&nbsp;Time tracking</li>\n<li>Fill in the<strong>&nbsp;Time Spent</strong>&nbsp;field</li>\n<li>Fill in the <strong>Time Remaining</strong> field and click Save</li>\n</ul>\n<p>&nbsp;</p>\n<h3><u>That's it!</u></h3>\n<h1>💯💯</h1>\n<p>&nbsp;</p>",
        "statusId": "2",
        "originalEstimate": 30,
        "timeTrackingSpent": 10,
        "timeTrackingRemaining": 10,
        "typeId": 1,
        "priorityId": 1,
        "projectId": 109
    }
}


const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        getTaskDetail: (state, action) =>{
            state.taskDetailModel = action.payload
        },
        onChangeTask: (state, action) =>{
            state.taskDetailModel = action.payload //{...state, taskDetailModel: {...state.taskDetailModel, [name]: value}}
        }
    }
});

export const { getTaskDetail, onChangeTask} = taskSlice.actions

export default taskSlice.reducer
const db = wx.cloud.database()

const testDB = wx.cloud.database({
    env: 'test'
})

const todos = db.collection('todos')

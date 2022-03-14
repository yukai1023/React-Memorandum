import { useState } from 'react'
import { v4 } from 'uuid'
const Edit = ({ add }) => {
  const [note, setNote] = useState('')
  function noteChange (e) {
    setNote(e.target.value)
  }
  const [date, setDate] = useState('')
  function dateChange (e) {
    setDate(e.target.value)
  }
  const [time, setTime] = useState('')
  function timeChange (e) {
    setTime(e.target.value)
  }

  function addItem () {
    add(function (prevData) {
      setNote('')
      setDate('')
      setTime('')
      return [
        {
          id: v4(),
          note,
          date,
          time
        },
        ...prevData
      ]
    }
    )
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p className='font'>記事:</p>
      <input type='text' value={note} onChange={noteChange} />
      <p className='font'>日期:</p>
      <input type='date' value={date} onChange={dateChange} />
      <p className='font'>時間</p>
      <input type='time' value={time} onChange={timeChange} />
      <button onClick={addItem} className='add'>
        新增
      </button>
    </div>
  )
}

export default Edit

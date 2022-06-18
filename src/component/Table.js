import React from 'react'

function Table() {
  return (
    <table class="table-auto border-separate border-spacing-2 border border-slate-600">
        <thead>
            <tr>
            <th className='border border-slate-500'>Song</th>
            <th className='border border-slate-500'>Artist</th>
            <th className='border border-slate-500'>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className='border border-slate-500'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className='border border-slate-500'>Malcolm Lockyer</td>
            <td className='border border-slate-500'>1961</td>
            </tr>
            <tr>
            <td className='border border-slate-500'>Witchy Woman</td>
            <td className='border border-slate-500'>The Eagles</td>
            <td className='border border-slate-500'>1972</td>
            </tr>
            <tr>
            <td className='border border-slate-500'>Shining Star</td>
            <td className='border border-slate-500'>Earth, Wind, and Fire</td>
            <td className='border border-slate-500'>1975</td>
            </tr>
        </tbody>
        </table>
  )
}

export default Table
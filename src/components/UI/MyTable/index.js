import tableStyles from './Table.module.scss'

const MyTable = () => {
    return <div>
        {/* <div>
            <div className='header'>
                <div className='row'>
                    <span>Recent Students</span>
                    <span>Joined</span>
                    <span>Class Teacher</span>
                    <span>Standard</span>
                    <span>Stats</span>
                </div>
            </div>
            <div className='body'>
                <div className='row'>
                    <span>Alfreds Futterkiste</span>
                    <span>25 May, 2020</span>
                    <span>Peter</span>
                    <span>1<sup>st</sup></span>
                    <span>76.47%</span>
                </div>
                <div className='row'>
                    <span>Vito Corleone</span>
                    <span>25 May, 2020</span>
                    <span>Jane</span>
                    <span>5<sup>th</sup></span>
                    <span>23.47%</span>
                </div>
                <div className='row'>
                    <span>Micheal Corleone</span>
                    <span>25 May, 2020</span>
                    <span>David</span>
                    <span>6<sup>th</sup></span>
                    <span>23.47%</span>
                </div>
            </div>
        </div> */}
        <table className={tableStyles.table__root}>
            <thead>
                <tr>
                    <th>Recent Students</th>
                    <th>Joined</th>
                    <th>Class Teacher</th>
                    <th>Standard</th>
                    <th>Stats</th>
                </tr>
            </thead>
            <tbody>
                <tr className={tableStyles.table__row}>
                    <td className={tableStyles.table__data}>Alfreds Futterkiste</td>
                    <td className={tableStyles.table__data}>25 May, 2020</td>
                    <td className={tableStyles.table__data}>Peter</td>
                    <td className={tableStyles.table__data}>1<sup>st</sup></td>
                    <td className={tableStyles.table__data}>76.47%</td>
                </tr>
                <tr className={tableStyles.table__row}>
                    <td className={tableStyles.table__data}>Vito Corleone</td>
                    <td className={tableStyles.table__data}>25 May, 2020</td>
                    <td className={tableStyles.table__data}>Jane</td>
                    <td className={tableStyles.table__data}>5<sup>th</sup></td>
                    <td className={tableStyles.table__data}>23.47%</td>
                </tr>
                <tr className={tableStyles.table__row}>
                    <td className={tableStyles.table__data}>Micheal Corleone</td>
                    <td className={tableStyles.table__data}>25 May, 2020</td>
                    <td className={tableStyles.table__data}>David</td>
                    <td className={tableStyles.table__data}>6<sup>th</sup></td>
                    <td className={tableStyles.table__data}>23.47%</td>
                </tr>
            </tbody>

        </table>
    </div>
}

export default MyTable
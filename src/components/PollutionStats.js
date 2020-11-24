import React from 'react';

export default ({stats}) => {
    return (
        <div className="m-pollutionStats">
            {
                stats.map(list=>
                    <div className="m-pollutionStat">
                        <div className="m-pollutionStat_value">{list.sine}{list.value}%</div>
                        <div className="m-pollutionStat_title">{list.title}</div>
                    </div>
                )
            }
        </div>
    );
}
import React from 'react';

export default ({stats}) => {
    return (
        <div className="m-pollutionStats">
            {
                stats.map(list=>
                    <div className="m-pollutionStat">
                        <div>
                            <span className="m-pollutionStat_sine">{list.sine}</span>
                            <span className="m-pollutionStat_value">{list.value}</span>
                        </div>
                        <span className="m-pollutionStat_title">{list.title}</span>

                    </div>
                )
            }
        </div>
    );
}
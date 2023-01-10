import React from 'react';
import styles from '../../style';
import {stats} from '../../constants/index';

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap xs:mt-20`}>
        {stats.map((stat) => (
            <div key={stat.id} className="flex-1 flex justify-start flex-row mr-3 items-center">
                <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
                    {stat.value}
                </h4>
                <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
                    {stat.title}
                </p>
            </div>
        ))}
    </section>
);

export default Stats;

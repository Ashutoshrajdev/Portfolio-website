import React from 'react'
import { footerVariants, staggerChildren } from '../../utils/motion'
import { motion } from 'framer-motion'
import css from './People.module.scss'
import Slider from 'react-slick'
import { comments, sliderSettings } from '../../utils/data'

const People = () => {
    return (
        <motion.section
            variants={staggerChildren}
            inital="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>
            <div className={`yPaddings innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <span className="primaryText">People talk about us</span>
                    <p style={{ marginTop: "2rem" }}>
                        I got a job that was in accordance with the salary and field of work
                    </p>
                    <p>
                        The process of submitting an application was quit cosy
                    </p>
                </div>


                {/* Carousal */}

                <motion.div
                    variants={footerVariants}
                    className={`yPaddings ${css.comments}`}>
            <a id='people' className="anchor"></a>

                    <Slider
                        {...sliderSettings}
                        className={css.slider}
                    >
                        {
                            comments.map((comment, i) => {
                                return (
                                    <div key={i} className={`flexCenter  ${css.comment}`}>
                                        <img src={comment.img} alt="" />
                                        <p>{comment.comment}</p>
                                        <div className={css.line}></div>

                                        <div className={css.bio}>
                                            <span>{comment.name}</span>
                                            <span>{comment.post}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default People
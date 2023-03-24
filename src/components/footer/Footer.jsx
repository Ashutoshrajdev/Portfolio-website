import React from 'react'
import { footerVariants, staggerChildren } from '../../utils/motion';
import {motion} from 'framer-motion'
import css from "./Footer.module.scss"

const Footer = () => {
    return (
        <motion.section
        varients={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>

            <motion.div
            variants={footerVariants}
            className={`innerWidth yPadding flexCenter ${css.container}`}>
                <div className={css.left}>
                    <span className="primaryText">
                        Let's make something  <br />
                        amazing together.
                    </span>
                    <span className="primaryText">
                        Start by <a href="mailto:ashutosh2016raj@gmail.com">saying hii</a>
                    </span>
                </div>
                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>Patna, Bihar</p>
                    </div>

                    <div className={css.menu }>
                    <li><a href="#experties">Services</a></li>
                    <li><a href="#work">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    {/* <li><a href="#people">Testimonials</a></li> */}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Footer;
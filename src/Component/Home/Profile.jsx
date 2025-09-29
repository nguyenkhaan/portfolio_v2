import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
function Profile() {
    return (
        <motion.div
            className='w-full gap-16 md:px-40 px-10 md:flex-row flex flex-col-reverse py-15 min-h-80 items-center justify-between'
            initial={{ x: -400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className='flex-1 flex flex-col justify-center items-start gap-6'>
                <h2 className='font-bold text-3xl inline-block'>Hi, I am An <br/> a Fullstack Developer</h2>
                <span>
                    Xin chào, mình là <strong>An</strong>, mọi người có thể gọi mình là <strong>Cloudian</strong>. 
                    Mình yêu thích việc xây dựng ứng dụng web hiện đại, từ giao diện người dùng đến hệ thống backend. 
                    Trang Portfolio này là nơi mình chia sẻ quá trình học tập, các dự án tiêu biểu và những công nghệ mình đang khám phá. Một lần nữa, cảm 
                    ơn vì đã đến ⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☀︎｡ ⋆｡ ﾟ.
                </span>
                <button className='py-2.5 px-6 hover:scale-[1.1] hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out font-bold text-base text-white rounded-sm'
                    style={{ backgroundColor: '#FF6464' }}
                ><i class="bi bi-arrow-down-square-fill"></i> Dowload my CV</button>
            </div>
            <div className='flex-1 flex items-center justify-end'>
                <motion.div
                    className='rounded-full w-60 h-60 cursor-pointer bg-center bg-cover bg-no-repeat shadow-[0_0_30px_10px_rgba(0,128,255,0.6)]'
                    style={{ backgroundImage: `url(${'images/default-avatar.jpg'})` }}
                    whileHover={{scale: 1.1}}
                >
                </motion.div>

            </div>
        </motion.div>
    )
}
export default Profile
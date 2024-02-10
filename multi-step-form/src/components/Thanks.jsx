import { motion } from "framer-motion"

const Thanks = () => {
  const boxVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      className="wr"
      initial="hidden"
      animate="visible"
      variants={boxVar}
    >
      <div className="box text-center">
        <img
          src="./icon-thank-you.svg"
          alt="icon"
          className="inline-block mb-8"
        />
        <h4>Thank you!</h4>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </motion.div>
  )
}

export default Thanks

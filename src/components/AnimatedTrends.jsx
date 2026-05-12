import { motion } from "framer-motion";
import React from "react";

export function AnimatedText({ children, className = "" }) {
  const flattenText = (child) => {
    if (typeof child === "string") return child.split(" ");
    if (React.isValidElement(child)) return flattenText(child.props.children).map((w) => React.cloneElement(child, {}, w));
    return [];
  };

  const words = React.Children.toArray(children).flatMap(flattenText);

  return (
    <div className={`whitespace-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ delay: i * 0.08,duration:0.5 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

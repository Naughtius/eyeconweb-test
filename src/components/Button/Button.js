import css from './Button.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Button = ({ className, variant = 'green', children, ...props }) => {
  return (
    <button
      className={cn(css.button, css[`_${variant}`], className)}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['green', 'green-light']),
}

export default Button

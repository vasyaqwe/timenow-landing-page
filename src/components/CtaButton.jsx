
export const CtaButton = ({ className, text = 'Start Scheduling' }) => {
    return (
        <a href="#" className={`${className}
        bg-primary-900 text-white py-4 px-6 rounded-md font-semibold hover:bg-primary-400
        `}>
            {text}
        </a>
    )
}

CtaButton.defaultProps = { className: '' }

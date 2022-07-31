import { FC } from 'react'

type FloatingBadgeProps = {
    message: string
};
const FloatingBadge: FC<FloatingBadgeProps> = ({message}) => {
    return (
        <div className='floating-badge'>{message}</div>
    );
}

export default FloatingBadge;
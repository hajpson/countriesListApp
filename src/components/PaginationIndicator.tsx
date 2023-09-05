import { BiChevronLeftSquare, BiChevronRightSquare } from 'react-icons/bi'
import { Icon } from './Icon';
import { FC } from 'react';
import { PaginationIndicatorProps } from '../types/paginationIndicatorProps';

export const PaginationIndicator: FC<PaginationIndicatorProps> = ({
    count,
    leftIconOnClick,
    rightIconOnClick,
    isFirstPage,
    isLastPage
}) => {
    return (
        <div className="paginationIndicatorContainer">
            {isFirstPage
                ?
                <Icon values={{ size: '30px', color: "rgba(133, 133, 133, 0.829)" }}
                    icon={<BiChevronLeftSquare />}
                    onClick={() => null} />
                :
                <Icon values={{ size: '30px', color: "white", className: 'indicatorIcon' }}
                    icon={<BiChevronLeftSquare />}
                    onClick={leftIconOnClick} />
            }


            <div className='paginationIndicatorCounterContainer'>
                <p className='preventSelect'>{count}</p>
            </div>

            {isLastPage
                ?
                <Icon values={{ size: '30px', color: "rgba(133, 133, 133, 0.829)" }}
                    icon={<BiChevronRightSquare />}
                    onClick={() => null} />
                :
                <Icon values={{ size: '30px', color: "white", className: 'indicatorIcon' }}
                    icon={<BiChevronRightSquare />}
                    onClick={rightIconOnClick} />}
        </div>
    )
}
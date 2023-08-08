import { lexend_mega } from '@/font';
import React from 'react';

class ColorWheel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColorIndex: 0,
        };
    }

    handleClick = (index) => {
        // Handle the click event for the color
        this.setState({ activeColorIndex: index });
        // console.log(`Clicked on color at index ${index}`);
    };

    render() {
        const colors = [
            '#FEFE33',
            '#f7c820',
            '#f47311',
            '#f75b1d',
            '#f4351f',
            '#a5095a',
            '#9907ba',
            '#5105bc',
            '#1950c6',
            '#5980f7',
            '#1e5008',
            '#a9d711',
        ];
        const doughnutRadius = 100;
        const holeRadius = 50;
        const center = doughnutRadius + 10; // Center of the SVG
        const angleStep = 360 / colors.length; // Calculate the angle step for each color
        const activeColorRadius = 110; // Radius for the active color

        return (
            <div className='lg:flex lg:justify-center lg:items-center'>
                <div className="flex flex-col-reverse gap-2 lg:gap-12 lg:flex-row items-center max-w-screen-md  mx-auto">
                    <div>

                        <div
                            className={`flex ${this.state.activeColorIndex === 0 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#F1F13B] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#E6E542] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#B3B223] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#7E7F18] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                        <div
                            className={`flex ${this.state.activeColorIndex === 1 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#f7c820] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#f8ce36] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#f9d34d] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#fade79] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                        <div
                            className={`flex ${this.state.activeColorIndex === 2 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#f47311] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#f58129] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#f79d58] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#fab988] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                        <div
                            className={`flex ${this.state.activeColorIndex === 3 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#f75b1d] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#de521a] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#c64917] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#ad4014] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                        <div
                            className={`flex ${this.state.activeColorIndex === 4 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#f4351f] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#dc301c] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#c32a19] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#ab2516] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                        <div
                            className={`flex ${this.state.activeColorIndex === 5 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#a5095a] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#ae226b] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#b73a7b] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#c0538c] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                        <div
                            className={`flex ${this.state.activeColorIndex === 6 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#9907ba] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#8a06a7] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#7a0695] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#6b0582] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                        <div
                            className={`flex ${this.state.activeColorIndex === 7 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#5105bc] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#621ec3] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#7437c9] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#9769d7] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                        <div
                            className={`flex ${this.state.activeColorIndex === 8 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#1950c6] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#3062cc] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#4773d1] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#5e85d7] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                        <div
                            className={`flex ${this.state.activeColorIndex === 9 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#5980f7] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#5073de] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#3e5aad] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#2d407c] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                        <div
                            className={`flex ${this.state.activeColorIndex === 10 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#3ba010] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#35900e] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#29700b] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#1e5008] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                        <div
                            className={`flex ${this.state.activeColorIndex === 11 ? '' : 'hidden'}`}
                        >
                            <div className="bg-[#d7f571] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full" />
                            <div className="bg-[#c9f242] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#c3f12b] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                            <div className="bg-[#a9d711] w-[40px] h-[40px] lg:w-[98px] lg:h-[98px] rounded-full lg:ms-[-35px] ms-[-10px]" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <svg width={center * 2} height={center * 2}>
                            {colors.map((color, index) => {
                                const startAngle = index * angleStep - 90;
                                const endAngle = (index + 1) * angleStep - 90;

                                const radius =
                                    this.state.activeColorIndex === index
                                        ? activeColorRadius
                                        : doughnutRadius;

                                return (
                                    <path
                                        key={color}
                                        d={`
                    M ${center + radius * Math.cos(startAngle * (Math.PI / 180))},${center +
                                            radius * Math.sin(startAngle * (Math.PI / 180))}
                    A ${radius},${radius} 0 0,1 ${center + radius * Math.cos(
                                                endAngle * (Math.PI / 180)
                                            )},${center + radius * Math.sin(endAngle * (Math.PI / 180))}
                    L ${center + holeRadius * Math.cos(
                                                endAngle * (Math.PI / 180)
                                            )},${center + holeRadius * Math.sin(
                                                endAngle * (Math.PI / 180)
                                            )}
                    A ${holeRadius},${holeRadius} 0 0,0 ${center + holeRadius * Math.cos(
                                                startAngle * (Math.PI / 180)
                                            )},${center + holeRadius * Math.sin(
                                                startAngle * (Math.PI / 180)
                                            )}
                    Z
                  `}
                                        fill={color}
                                        onClick={() => this.handleClick(index)}
                                    />
                                );
                            })}
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorWheel;

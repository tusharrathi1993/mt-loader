import styled from 'styled-components';

const MTLoader = styled.div`
	height: 400px;
	width: 400px;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Star = styled.div`
	position: absolute;
	bottom: 30px;
	display: block;
	color: orange;
	width: 0px;
	height: 0px;
	border-right: calc(100px / 4) solid transparent;
	border-bottom: calc(70px / 4) solid orange;
	border-left: calc(100px / 4) solid transparent;
	transform: rotate(35deg);
	animation: rotate-scale-up 2s linear infinite both;

	@keyframes rotate-scale-up {
		0% {
			transform: scale(1) rotateZ(0);
		}
		50% {
			transform: scale(1.1) rotateZ(180deg);
		}
		100% {
			transform: scale(1) rotateZ(360deg);
		}
	}

	&::before {
		border-bottom: calc(80px / 4) solid orange;
		border-left: calc(30px / 4) solid transparent;
		border-right: calc(30px / 4) solid transparent;
		position: absolute;
		height: 0;
		width: 0;
		top: -11px;
		left: -16px;
		display: block;
		content: '';
		transform: rotate(-35deg);
	}

	&::after {
		position: absolute;
		display: block;
		color: orange;
		top: 3px;
		left: -28px;
		width: 0px;
		height: 0px;
		border-right: calc(100px / 4) solid transparent;
		border-bottom: calc(70px / 4) solid orange;
		border-left: calc(100px / 4) solid transparent;
		transform: rotate(-70deg);
		content: '';
	}
`;

const Bar = styled.div`
	position: absolute;
	top: 30px;
	left: 77px;
	border-top: 100px solid black;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	height: 0;
	width: 30px;
	transform: rotate(5deg);
	animation: heartbeat 2s ease-in-out infinite both;

	@keyframes heartbeat {
		from {
			transform: scale(1);
			transform-origin: center center;
			animation-timing-function: ease-out;
		}
		10% {
			transform: scale(0.91);
			animation-timing-function: ease-in;
		}
		17% {
			transform: scale(0.98);
			animation-timing-function: ease-out;
		}
		33% {
			transform: scale(0.87);
			animation-timing-function: ease-in;
		}
		45% {
			transform: scale(1);
			animation-timing-function: ease-out;
		}
	}
`;

const Circle = styled.div`
	position: relative;
	flex: 0 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	width: 200px;
	border: 20px solid black;
	border-radius: 50%;
	background-color: white;
`;

export { MTLoader, Star, Bar, Circle };

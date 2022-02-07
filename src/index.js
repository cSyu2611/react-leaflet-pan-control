import React from 'react';
import {
    useMap
} from 'react-leaflet';

const PanController = () => {
    const map = useMap();
    const upClick = () => {
        map.panBy([0, -100]);
    };
    const rightClick = () => {
        map.panBy([100, 0]);
    }
    const leftClick = () => {
        map.panBy([-100, 0]);
    }
    const downClick = () => {
        map.panBy([0, 100]);
    }
    return <div style={{
        position: 'absolute',
        zIndex: 5000,
        bottom: "80px",
    }}>
        <div
            style={{
                backgroundColor: 'white',
                padding: '5px',
            }}
        >
            <div style={{ marginLeft: '23px' }}>
                <button type="button" onClick={() => upClick()}>
                    ▲
            </button>
            </div>
            <div>
                <button type="button" onClick={() => leftClick()}>
                    ◀︎
            </button>
                <button type="button" onClick={() => rightClick()}>
                    {"　　▶︎"}
                </button>
            </div>
            <div style={{ marginLeft: '23px' }}>
                <button type="button" onClick={() => downClick()}>
                    ▼
            </button>
            </div>
        </div>
    </div>
    ;
}

export default PanController;
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textarea(propsTextarea) {
    let style = {
        dark: {
            backgroundColor: '#292929',
            color: 'white'
        },
        light: {
            backgroundColor: 'white',
            color: 'black'
        }
    }
    /**
     * text -> variable whose state has to be changed.
     * setText -> Function change the state of text.
     * useState argument -> text default value.
     * setText argument -> text new value.
     */
    const [text, setText] = useState(propsTextarea.default);
    function change(event) {
        setText(event.target.value);
    };
    function textChangeUp() {
        setText(text.toUpperCase());
    };
    function textChangeLow() {
        setText(text.toLowerCase());
    };
    function textClear() {
        setText('');
    };
    function textCopy() {
        navigator.clipboard.writeText(text);
    }
    function clearSpace() {
        setText(text.replace(/\s+/g, ' '));
    }
    return (
        <>
            <div className="container my-3">
                <h1>{propsTextarea.heading}</h1>
                <div className='my-3'>
                    <textarea className="form-control" id="textarea" rows={propsTextarea.rows} onChange={change} value={text} style={propsTextarea.mode === 'light' ? style.light : style.dark}></textarea>
                    <button className={`btn btn-${propsTextarea.mode === 'light' ? 'info' : 'light'} my-3`} onClick={textChangeUp}>To Upper Case</button>
                    <button className={`btn btn-${propsTextarea.mode === 'light' ? 'info' : 'light'} my-3 mx-3`} onClick={textChangeLow}>To Lower Case</button>
                    <button className={`btn btn-${propsTextarea.mode === 'light' ? 'info' : 'light'} my-3 mx-1`} onClick={textClear}>Clear</button>
                    <button className={`btn btn-${propsTextarea.mode === 'light' ? 'info' : 'light'} my-3 mx-3`} onClick={textCopy}>Copy text</button>
                    <button className={`btn btn-${propsTextarea.mode === 'light' ? 'info' : 'light'} my-3 mx-1`} onClick={clearSpace}>Clear spaces</button>
                </div>
            </div>
            <div className="container">
                <h1>Your text summary</h1>
                <p>{text.length > 0 ? text.replace(/\s+/g, ' ').trim().split(' ').length : 0} words and {text.length} characters.</p>
                <h2>Text preview:</h2>
                <p>{text.length > 0 ? text : 'Please enter some text to preview.'}</p>
            </div>
        </>
    );
};
Textarea.propTypes = {
    heading: PropTypes.string.isRequired,
    rows: PropTypes.number,
    default: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
};

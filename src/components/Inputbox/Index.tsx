import React, { ChangeEvent, KeyboardEvent } from "react";
import './style.css';

export interface InputBoxProps {
    label: string;
    type: 'text' | 'password';
    value: string;
    // 로그인 페이지 밑에 빨간색으로 뜨는 글자 띄우게 하는 것
    placeholder: string;
    // 입력값 변동될때마다 새롭게 입력함
    onChangeHandler: (enet: ChangeEvent<HTMLInputElement>) => void;
    // ?로 선택을 할 수 있게 만들어 줌 
    buttonTitle?: string;
    buttonStatus?: boolean;
    onButtonClickHandler?: () => void;
    message?: string;
    error?:boolean;
    onKeydownHandler?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export default function InputBox({ label, type, value, placeholder, onChangeHandler, buttonTitle, buttonStatus, onButtonClickHandler, message, error, onKeydownHandler }: InputBoxProps) {

    const buttonClass = buttonStatus ? 'input-primary-button' : 'input-disable-button';
    const messageClass = 'input-message ' + (error ? 'error' : 'primary');

    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input
                    className="input"
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    onKeyDown={onKeydownHandler}
                />
                { buttonTitle && 
                // onButtonClickHandler => undefined가 올 수 있음 
                <div className={buttonClass} onClick={onButtonClickHandler}>
                    {buttonTitle}
                </div> 
                }
            </div>
            <div className={messageClass}>
                {message}
            </div>
        </div>
    );
}
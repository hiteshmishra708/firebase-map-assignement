import React, { Component } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import './Common.css';
import * as ReactModal from 'react-modal';
import { faTimes, faCheck, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isVaild } from '../Validator/Validator';

export class Button extends Component {
    render() {
        let cName = this.props.cName ? "custom-btn " + this.props.cName : "custom-btn";
        if (this.props.noDClass) cName = this.props.cName;
        return (
            <button id={this.props.id} className={cName} onClick={this.props.type === "submit" ? null : this.props.onClick} tabIndex={this.props.tabIndex}>{this.props.children ? this.props.children : this.props.title}</button>
        )
    }
}

export class Hr extends Component {
    render() {
        return (
            <>
                <hr className={"custom-hr " + this.props.cName} width={this.props.width} />
            </>
        );
    };

}

export class Input extends Component {
    state = {
        errMsg: '',
        hasErr: false
    }
    hasRequiredError() {
        return this.props.showError && this.props.required && !(this.props.value && (typeof (this.props.value) === 'number' || this.props.value.trim()));
    }

    getClass() {
        let cName = this.props.cName ? "custom-input " + this.props.cName : "custom-input";
        cName = this.hasRequiredError() ? cName + " custom-input-error" : cName;
        cName = this.props.readonly ? cName + " readonly" : cName;
        return cName;
    }

    onChange(e) {
        let re, errMsg, sync = false;
        switch (this.props.iType) {
            case 'num':
                re = /^[0-9\b]+$/;
                break;
            case 'email':
                re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                errMsg = 'Please enter valid email id';
                sync = true;
                break;
            case 'mobilenum':
                re = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
                errMsg = 'Please enter 10 digit number';
                sync = true;
                break;
            case 'int':
                re = /^\d*[1-9]\d*$/;
                errMsg = 'Please enter a number'
                sync = true;
                break;
            default:
                break;
        }
        if (!re.test(e.target.value)) {
            this.setState({ errMsg: errMsg, hasErr: true })
        } else {
            this.setState({ errMsg: '', hasErr: false })
            this.props.onChange(e);
        }
        if (sync || !e.target.value) {
            this.props.onChange(e);
        }
    }

    render() {
        if (this.props.value && this.props.iType && this.state.hasErr && isVaild(this.props.iType, this.props.value)) {
            this.setState({ errMsg: '', hasErr: false })
        }
        return (
            <>
                {this.props.label && !this.props.noLabel && (
                    <Label title={this.props.label + (this.props.required ? "*" : "")} cName={"custom-input-label " + this.props.colName} />
                )}
                <input type={this.props.type} id={this.props.id} list={this.props.list} className={this.getClass()} placeholder={this.props.placeholder} value={this.props.value} onChange={(e) => this.props.iType ? this.onChange(e) : this.props.onChange(e)} tabIndex={this.props.tabIndex} onFocus={(e) => this.props.onFocus ? this.props.onFocus(e, true) : null} onBlur={(e) => this.props.onFocus ? this.props.onFocus(e) : null} autoFocus={this.props.autoFocus} accept={this.props.accept} />
                {!this.state.hasErr && this.hasRequiredError() && !this.props.noLabel && (
                    <Label cName={"custom-label-error " + this.props.colNameError} title={this.props.label + " is required"} />
                )}
                {this.props.iType && this.state.hasErr && this.state.errMsg && !this.props.noLabel && (
                    <Label cName={"custom-label-error " + this.props.colNameError} title={this.state.errMsg} />
                )}
            </>
        )
    }
}

export class Label extends Component {
    render() {
        return (
            <label className={this.props.cName ? "custom-label " + this.props.cName : "custom-label"} onClick={this.props.onClick ? this.props.onClick : null}>{this.props.children ? this.props.children : this.props.title}</label>
        )
    }
}

export class Link extends Component {
    render() {
        return (
            <ReactLink className={this.props.cName} to={this.props.to} target={this.props.target} onClick={this.props.onClick ? this.props.onClick : null}>{this.props.children ? this.props.children : this.props.title}</ReactLink>
        )
    }
}

export class Span extends Component {
    render() {
        return (
            <span className={this.props.cName ? "custom-span " + this.props.cName : "custom-span"} onClick={this.props.onClick ? this.props.onClick : null}>{this.props.children ? this.props.children : this.props.title}</span>
        )
    }
}

export class H1 extends Component {
    render() {
        return (
            <h1 className={this.props.cName ? "custom-h1 " + this.props.cName : "custom-h1"}>{this.props.children ? this.props.children : this.props.title}</h1>
        )
    }
}

export class H4 extends Component {
    render() {
        return (
            <h4 className={this.props.cName ? "custom-h4 " + this.props.cName : "custom-h4"}>{this.props.children ? this.props.children : this.props.title}</h4>
        )
    }
}

export class P extends Component {
    render() {
        return (
            <p className={this.props.cName ? "custom-p " + this.props.cName : "custom-p"}>{this.props.children ? this.props.children : this.props.title}</p>
        )
    }
}

export class Div extends Component {
    render() {
        return (
            <div id={this.props.id} className={this.props.cName} onClick={this.props.onClick ? (e) => this.props.onClick(e) : null}>{this.props.children}</div>
        )
    }
}

export class Img extends Component {
    render() {
        return (
            <img id={this.props.id} className={this.props.cName ? "custom-img " + this.props.cName : "custom-img"} src={this.props.isUrl ? this.props.src : require('../../assets/icons/' + this.props.src)} alt={this.props.alt} height={this.props.height} width={this.props.width} onClick={this.props.onClick ? (e) => this.props.onClick(e) : null} />
        )
    }
}

export class Modal extends Component {
    render() {
        const customStyles = {
            content: {
                margin: 'auto',
                width: this.props.width,
                height: this.props.height,
                borderRadius: '20px',
                boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)',
            }, overlay: {
                zIndex: 99
            }
        };
        const src = this.props.isSuccess ? 'checked.svg' : 'cancel.svg';
        return (
            <ReactModal
                isOpen={true}
                contentLabel="Confirmation"
                style={customStyles}
                onRequestClose={!this.props.close && (() => this.props.closeModal())}
                ariaHideApp={false}
            >
                <Div cName="custom-modal">
                    <Div cName="custom-modal-header">
                        <Label cName="custom-modal-title" title={this.props.title} />
                        {!this.props.close &&
                            <Div onClick={() => this.props.closeModal()}>
                                <FontAwesomeIcon icon={faTimes} />
                            </Div>
                        }
                    </Div>
                    <Div cName="custom-modal-content text-center">
                        {(!this.props.close && this.props.title) || this.props.isConfirm ? (
                            <>
                                <Img src={src} width="70px" height="70px" />
                                <Label title={this.props.confirmMsg} />
                            </>
                        )
                            : (
                                this.props.children
                            )}
                    </Div>
                    {this.props.isConfirm && (
                        <Div cName="footer text-center">
                            <Button onClick={() => this.props.closeModal(true)}>
                                <FontAwesomeIcon icon={faCheck} />
                                <Span title="Yes" />
                            </Button>
                            <Button onClick={() => this.props.closeModal()}>
                                <FontAwesomeIcon icon={faBan} />
                                <Span title="No" />
                            </Button>
                        </Div>
                    )}
                </Div>
            </ReactModal>
        )
    }
}

export class Spinner extends Component {
    render() {
        return (
            <>
                <Div cName="lds-default">
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                </Div>
                <Div cName="custom-spinner" />
            </>
        );
    }
}

export class UL extends Component {
    render() {
        const listItems = this.props.children.map((child, idx) => {
            return (
                <li className={this.props.cNameLi} key={idx} onClick={this.props.onClick} >{child}</li>
            );
        });
        return (
            <ul className={this.props.cName ? "custom-ul " + this.props.cName : "custom-ul"} >{listItems}</ul>
        )
    }
}
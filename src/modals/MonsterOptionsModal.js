import { Button, FormControl, FormGroup, Glyphicon, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import React, { Component } from 'react';

import BhModal from "./BhModal";
import C from "../Constants";
import ColorPicker from "./ColorPicker";
import ColorService from "../services/ColorService";
import MonsterData from '../data/MonsterData';
import OptionLine from "./OptionLine";
import SampleHpBar from '../SampleHpBar';
import TextField from "./TextField";

const maxHpRegex = /^[0-9]+$/i;

class MonsterOptionsModal extends Component {
    constructor(props) {
        super(props);

        const monster: MonsterData = props.context.monster;

        this.state = {
            showCustomize: false,
            showColorPicker: false,
            showTextColorPicker: false,
            name: monster && monster.name,
            hp: monster && monster.hp,
            color: monster && monster.color,
            textColor: monster && monster.textColor
        };
    }

    buildTitle = () => {
        const list = this.props.context.list;
        const mon = this.props.context.monster;
        if (!list || !mon) return "";
        if (mon.name) return mon.name;
        return `${list.name} #${mon.number}`;
    }

    sampleLabel = () => {
        const monster = this.props.context.monster;
        const name = this.state.name ? this.state.name : `#${monster.number}`;
        return `${name} ${this.state.hp} / ${this.state.hp}`;
    }

    sampleColor = () => {
        const list = this.props.context.list;
        return this.state.color || list && list.color || this.props.encounter.color;
    }

    sampleTextColor = () => {
        const list = this.props.context.list;
        return this.state.textColor || list && list.textColor || this.props.encounter.textColor;
    }

    toCustomizeOptions = () => {
        this.setState({ showCustomize: true });
    }

    saveCustomize = () => {
        if (this.validateCustomize() === "error") return;
        this.props.onCustomizeSave({
            name: this.state.name,
            hp: parseInt(this.state.hp),
            color: this.state.color,
            textColor: this.state.textColor
        });
    }

    validateCustomize = () => {
        return !this.state.hp || !maxHpRegex.test(this.state.hp) ? "error" : "success";
    }

    renderBaseOptions = () => {
        return (
            <ListGroup>
                <OptionLine onClick={this.toCustomizeOptions} icon="pencil">Customize</OptionLine>
                <OptionLine onClick={this.props.onKill} icon="thumbs-down">Kill (0HP)</OptionLine>
                <OptionLine onClick={this.props.onFullHeal} icon="heart">Full Heal</OptionLine>
                <hr />
                <OptionLine onClick={this.props.onDelete} icon="trash">Delete</OptionLine>
            </ListGroup>
        );
    }

    renderCustomize = () => {
        return (
            <ListGroup>
                <OptionLine>
                    <SampleHpBar label={this.sampleLabel()} color={this.sampleColor()} textColor={this.sampleTextColor()} />
                </OptionLine>
                <OptionLine>
                    <TextField label="Name" value={this.state.name} valuePropName="name" onEnter={this.saveCustomize} container={this} />
                </OptionLine>
                <OptionLine>
                    <TextField label="Max HP" value={this.state.hp} valuePropName="hp" onEnter={this.saveCustomize} validationState={this.validateCustomize()} container={this} />
                </OptionLine>
                <OptionLine>
                    <ColorPicker
                        label="Hp Bar Color"
                        showPicker={this.state.showColorPicker}
                        onTogglePicker={ColorService.onToggleFunc("showColorPicker", this)}
                        color={this.state.color}
                        defaultColor={C.DefaultMonsterColor}
                        presetColors={C.PresetMonsterColor}
                        onChange={ColorService.onChangeFunc("color", this)}
                    />
                </OptionLine>
                <OptionLine>
                    <ColorPicker
                        label="Hp Bar Text Color"
                        showPicker={this.state.showTextColorPicker}
                        onTogglePicker={ColorService.onToggleFunc("showTextColorPicker", this)}
                        color={this.state.textColor}
                        defaultColor={C.DefaultMonsterTextColor}
                        presetColors={C.PresetMonsterTextColor}
                        onChange={ColorService.onChangeFunc("textColor", this)}
                    />
                </OptionLine>
            </ListGroup>
        );
    }

    renderCustomizeFooter = () => {
        return (
            <div>
                <Button bsSize="small" bsStyle="primary" onClick={this.saveCustomize} disabled={this.validateCustomize() !== "success"}>Save</Button>
                <Button bsSize="small" onClick={this.props.onHide}>Cancel</Button>
            </div>
        );
    }

    render() {
        return (
            <BhModal
                show={this.props.show}
                onHide={this.props.onHide}
                title={this.buildTitle()}
                body={this.state.showCustomize ? this.renderCustomize() : this.renderBaseOptions()}
                footer={this.state.showCustomize ? this.renderCustomizeFooter() : null}
            />
        );
    }
}

export default MonsterOptionsModal;
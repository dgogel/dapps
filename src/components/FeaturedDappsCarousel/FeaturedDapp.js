import React, { Component } from 'react'
import './FeaturedDapp.css';
import { trackEvent } from '../../util/analytics';

export default class FeaturedDapp extends Component {

    track = () => {
        trackEvent('Click', { 
            'featured-dapp' : this.props.data.shortName,
            'position': this.props.position + 1
        });
    }

    render(){
        const { shortName, url, icon } = this.props.data;
        return (
            <a
                className={'featured-dapp'}
                href={url}
                onclick={this.track}
            >
                <span className={'featured-dapp-box'}>
                    <img 
                        src={icon} 
                        className={'featured-dapp-logo'}
                        alt={`${shortName} logo`}
                    />
                </span>
                <p className={'featured-dapp-name'} >{shortName}</p>

            </a>
            );
    }
}
import React, { Component } from 'react';
import './RecipesPage.css';
export default class RecipesPage extends Component {
    render() {
        if (! this.props.activeUser){
            window.location.href = "/#/login";
            return null;
        }
        return (
            <div className="p-recipes">
                recipesPAGE
            </div>
        )
    }
}

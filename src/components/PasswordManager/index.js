import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const backgroundColors = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6']

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    checkbox: false,
  }

  onChangeWebsiteEl = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsernameEl = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordEl = event => {
    this.setState({password: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const backgroundColorIndex = Math.ceil(Math.random() * 5)
    const bgColor = backgroundColors[backgroundColorIndex]
    const newPassword = {
      id: uuidv4(),
      websiteName: website,
      usernameName: username,
      passwordName: password,
      bgColors: bgColor,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickDeleteButton = id => {
    const {passwordsList} = this.state
    const filteredPasswords = passwordsList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({passwordsList: filteredPasswords})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({checkbox: !prevState.checkbox}))
  }

  render() {
    const {
      passwordsList,
      website,
      username,
      password,
      searchInput,
      checkbox,
    } = this.state
    const resultsList = passwordsList.filter(eachItem =>
      eachItem.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="divContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logoImage"
        />
        <div className="wholeContainer">
          <div className="passwordAddingContainer">
            <img alt="password manager" className="passwordManagerImage" />
            <div className="formContainer">
              <h1 className="heading">Add New Password</h1>
              <form>
                <div className="inputContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="formImages"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="inputEl"
                    onChange={this.onChangeWebsiteEl}
                    value={website}
                  />
                </div>

                <div className="inputContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="formImages"
                  />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="inputEl"
                    onChange={this.onChangeUsernameEl}
                    value={username}
                  />
                </div>

                <div className="inputContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="formImages"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="inputEl"
                    onChange={this.onChangePasswordEl}
                    value={password}
                  />
                </div>
                <div className="buttonCont">
                  <button
                    type="submit"
                    className="buttonEl"
                    onClick={this.onClickAddButton}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="passwordsListContainer">
            <div className="countAndSearchContainer">
              <div className="headingContainer">
                <h1 className="heading2">Your Passwords </h1>
                <p className="countValue">{resultsList.length}</p>
              </div>
              <div className="inputContainer2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="searchImage"
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="inputEl2"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <hr className="horizontalLine" />
            <div className="checkboxContainer">
              <input
                type="checkbox"
                className="checkboxEl"
                id="checkbox"
                onClick={this.onClickCheckbox}
              />
              <label htmlFor="checkbox" className="labelText">
                Show Passwords
              </label>
            </div>
            {resultsList.length === 0 ? (
              <div className="noPasswordsContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="noPasswordsImage"
                />
                <p className="heading3">No Passwords</p>
              </div>
            ) : (
              <ul className="listContainer">
                {resultsList.map(eachItem => (
                  <PasswordItem
                    key={eachItem.id}
                    details={eachItem}
                    onClickDeleteButton={this.onClickDeleteButton}
                    checkboxChecked={checkbox}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager

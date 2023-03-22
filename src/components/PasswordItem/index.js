import './index.css'

const PasswordItem = props => {
  const {details, onClickDeleteButton, checkboxChecked} = props
  const {id, websiteName, usernameName, passwordName, bgColors} = details

  const websiteId = websiteName.slice(0, 1).toUpperCase()
  const onClickDelete = () => {
    onClickDeleteButton(id)
  }
  return (
    <li className="passwordItemContainer">
      <div className="passwordDetails">
        <p className={`nameId ${bgColors}`}>{websiteId}</p>
        <div className="descCont">
          <p className="websiteName">{websiteName}</p>
          <p className="username">{usernameName}</p>
          {checkboxChecked ? (
            <p className="passwordName"> {passwordName} </p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="starImage"
            />
          )}
        </div>
      </div>
      <button
        type="button"
        className="deleteButton"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deleteImage"
        />
      </button>
    </li>
  )
}

export default PasswordItem

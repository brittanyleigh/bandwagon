import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faMountain, faPlug, faUniversity, faUserFriends, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const categories = [
  {
    icon: faDog,
    action: 'Animals',
    category: 'animals'
  },
  {
    icon: faUniversity,
    action: 'Architecture',
    category: 'arch'
  },
  {
    icon: faMountain,
    action: 'Nature',
    category: 'nature'
  },
  {
    icon: faPlug,
    action: 'Tech',
    category: 'tech'
  },
  {
    icon: faUserFriends,
    action: 'People',
    category: 'people'
  }
]

class Widget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentAction: 0,
      currentImage: this.props.handleChange(categories[0].category)
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  onWidgetNextClick = () => {
    const currentAction = this.state.currentAction;
    let newAction;

    if (currentAction < categories.length - 1) {
      newAction = currentAction + 1;
    } else {
      newAction = 0;
    }

    this.handleChangeAction(newAction);
  }

  onWidgetPreviousClick = () => {
    const currentAction = this.state.currentAction;
    let newAction;

    if (currentAction > 0) {
      newAction = currentAction - 1;
    } else {
      newAction = categories.length - 1;
    }

    this.handleChangeAction(newAction);
  }

  handleChangeAction = (action) => {
    this.setState({
      currentAction: action,
      currentImage: this.props.handleChange(categories[action].category)
    });
  }

  handleKeyDown = (event) => {
    if(event.key === 'ArrowLeft'){
      this.onWidgetPreviousClick();
    }
    if(event.key === 'ArrowRight'){
      this.onWidgetNextClick();
    }
  }

  render() {
    const { currentAction, currentImage } = this.state

    const buttonClasses = [
       'inline-block',
       'sm:text-3xl text-xl',
       'py-4 sm:px-8 px-6',
       'bg-blue-200 hover:bg-blue-300 focus:bg-blue-300',
       'border-solid border-gray-500',
       'cursor-pointer',
       'flex items-center'
    ].join(' ')
    const widgetClasses = [
       'sm:w-3/4 w-full',
       'mx-auto',
       'border border-solid border-gray-500',
       'm-8',
       'flex',
       'bg-white',
    ].join(' ')

    return(
      <div className="flex justify-center flex-col">

        <div className={widgetClasses}>
          <button className={`border-r ${buttonClasses}`} onClick={this.onWidgetPreviousClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <h2 className="inline-block sm:text-3xl text-xl p-4 flex-grow text-center">
            <span className="px-2">
              <FontAwesomeIcon icon={categories[currentAction].icon} />
            </span>
            {categories[currentAction].action}
          </h2>
          <button className={`border-l ${buttonClasses}`} onClick={this.onWidgetNextClick}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <img className="border border-solid border-gray-500" src={currentImage} />
      </div>
    )
  }
};

export default Widget;

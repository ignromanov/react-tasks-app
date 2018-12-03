import PropTypes              from 'prop-types'
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { Button }             from 'reactstrap'
import { bindActionCreators } from 'redux'
import { uiActions }          from '../../changers/ui/actions'

const mapStateToProps = ( state ) => ({
  uiState: state.uiState,
})

const mapDispatchToProps = ( dispatch ) => ({
  uiActions: bindActionCreators( { ...uiActions }, dispatch ),
})

class Create extends Component {
  static defaultProps = {}
  
  static propTypes = {
    uiState:   PropTypes.shape( {
      isModalCreateTask: PropTypes.bool,
    } ),
    uiActions: PropTypes.shape( {
      openModalCreateTask: PropTypes.func.isRequired,
    } ),
  }
  state = {
    isModalCreateTask: undefined,
  }
  handleCreateTask = () => {
    this.props.uiActions.openModalCreateTask()
  }
  
  static getDerivedStateFromProps( newProps, state ) {
    const storedIsModalCreateTask = newProps.uiState.get( 'isModalCreateTask' )
    if( !state.isModalCreateTask || storedIsModalCreateTask !== state.isModalCreateTask )
      return ({
        isModalCreateTask: storedIsModalCreateTask,
      })
    
    return null
  }
  
  render() {
    return (
      <Button color="primary" onClick={this.handleCreateTask}>Create task</Button>
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Create )

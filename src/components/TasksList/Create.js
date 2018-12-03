import PropTypes              from 'prop-types'
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { Button }             from 'reactstrap'
import { bindActionCreators } from 'redux'
import { uiActions }          from '../../changers/ui/actions'

const mapDispatchToProps = ( dispatch ) => ({
  uiActions: bindActionCreators( { ...uiActions }, dispatch ),
})

class Create extends Component {
  static defaultProps = {}
  
  static propTypes = {
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
  
  render() {
    return (
      <Button color="primary" onClick={this.handleCreateTask}>
        Create task
      </Button>
    )
  }
}

export default connect( null, mapDispatchToProps )( Create )

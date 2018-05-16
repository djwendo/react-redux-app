import React from 'react';
import { connect } from 'react-redux';
import MessagePresenter from './MessagePresenter';

function mapStateToProps ({state}) {
  return {
    loading: state.loading,
    messages: state.messages,
  };
}

const MessageList = connect (mapStateToProps)(MessagePresenter);
import React from 'react'
import axios from 'axios'
import { requestData, receiveDataSuccess, receiveDataFailed } from '../actions'

const CharacterList = ({ store }) => {
  const { isFetching, characterArray } = store.getState().characters

  const handleFetchData = () => {
    store.dispatch(requestData())
    axios.get('/api/characters')
    .then(response => {
      const _characterArray = response.data
      store.dispatch(receiveDataSuccess(_characterArray))  
    })
    .catch(err => {
      console.error(new Error(err))
      store.dispatch(receiveDataFailed())
    })
  }

  const handleUpdateCharacter = id => {
    store.dispatch(requestData())
    axios.put('/api/characters', {
      id,
    })
    .then(response => {
      const _characterArray = response.data
      store.dispatch(receiveDataSuccess(_characterArray))
    })
    .catch(err => {
      console.error(new Error(err))
      store.dispatch(receiveDataFailed())
    })
  }

  const handleDeleteCharacter = id => {
    store.dispatch(requestData())
    axios({
      method: 'delete',
      url: '/api/characters',
      data: {
        id,
      }
    })
    .then(response => {
      const _characterArray = response.data
      store.dispatch(receiveDataSuccess(_characterArray))
    })
    .catch(err => {
      console.error(new Error(err))
      store.dispatch(receiveDataFailed())
    })
  }

  return (
    <div>
      {
        isFetching
          ? <h2>Now Loading...</h2>
          : <div>
              <button onClick={() => handleFetchData()}>fetch data</button>
              <ul>
                {characterArray.map(character => (
                  <li key={character._id}>  
                    {`${character.name} (${character.age})`}
                    <button onClick={() => handleUpdateCharacter(character._id)}>+1</button>
                    <button onClick={() => handleDeleteCharacter(character._id)}>delete</button>
                  </li>
                ))}
              </ul>
            </div>
      }
    </div>
  )
}

export default CharacterList
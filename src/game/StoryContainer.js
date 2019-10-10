import React from 'react'
import Story from './Story'

export default function StoryContainer ({ stories = [], votingValues = [], addNewStory }) {
  return (
    <div>
      {
        stories.map(story => (
          <Story
            key={story.id}
            id={story.id}
            votingValues={votingValues}
            addNewStory={addNewStory}
          />
        ))
      }
    </div>
  )
}

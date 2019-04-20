import React from 'react';
import { StyleSheet } from 'react-native'
import { Content, Text, Segment, Button } from 'native-base';

export default class SeasonalProduceTabs extends React.Component {
  state = {
    produceTab: 'Spring'
  }

  _changeProduceTab = (season) => {
    this.setState({ produceTab: season })
  }
  render() {
    const buttons = this.props.item.data.map(season => {
      return (
        <Button
          key={season.id}
          first={season.text === 'Spring'}
          last={season.text === 'Winter'}
          active={this.state.produceTab === season.text}
          onPress={() => {
            this._changeProduceTab(season.text)
          }}
        >
          <Text>
            {season.text}
          </Text>
        </Button>
      )
    })
    const produce = this.props.item.data.filter(season => season.text === this.state.produceTab)[0].produce.map((produce, i) => <Text key={i}>
      {produce}
    </Text>)
    return (
      <>
        <Segment>
          {buttons}
        </Segment>
        <Content>
          <Text>
            {produce}
          </Text>
        </Content>
      </>
    );
  }
}

const styles = StyleSheet.create({

});
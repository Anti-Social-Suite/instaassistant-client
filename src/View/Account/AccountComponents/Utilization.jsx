import React from 'react';
import { Card, Grid, Text, Progress } from '@nextui-org/react';
import { IconsQuestionMark } from 'Components/icons/icons';

function Utilization({num}) {
  return (
    <Grid sm={4} xs={12}>
      <Card
        css={{
          backdropFilter: 'blur(15px)',
          background: '$myColor',
        }}
      >
        <Card.Header>Utilization&nbsp;<IconsQuestionMark
                    content="Utilization is representative of how much/well you are using our application."
                    local="top"
                  /></Card.Header>
        <Card.Divider />
        <Card.Body>
          <Grid.Container>
            <Grid sm={2}>
              <Text h2>{num}%</Text>
            </Grid>
            <Grid sm={12} xs={12}>
              <Progress color="primary" value={num} />
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default Utilization;

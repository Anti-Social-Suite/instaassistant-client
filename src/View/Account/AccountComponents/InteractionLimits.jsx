import React from 'react';
import { Table, Grid, Card } from '@nextui-org/react';
import { BsEmojiSunglasses } from 'react-icons/bs'; //follow
import { AiOutlineMessage } from 'react-icons/ai'; //comment
import { FaRegEnvelopeOpen } from 'react-icons/fa'; //dm
import { FiHeart } from 'react-icons/fi'; //like

const InteractionLimits = ({follows, likes, comments, messages}) => {
  return (
    <Grid sm={4} xs={12}>
      <Card
        css={{
          backdropFilter: 'blur(15px)',
          background: '$myColor',
        }}
      >
        <Card.Header>Interaction Limits</Card.Header>
        <Card.Divider />
        <Card.Body>
          <Table
            shadow={false}
            aria-label="Example table with static content"
            css={{
              height: 'auto',
              minWidth: '100%',
            }}
          >
            <Table.Header>
              <Table.Column>Interaction</Table.Column>
              <Table.Column>Sent</Table.Column>
              <Table.Column>Limit</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row key="1">
                <Table.Cell><BsEmojiSunglasses /> Follow</Table.Cell>
                <Table.Cell>{follows}</Table.Cell>
                <Table.Cell>1000</Table.Cell>
              </Table.Row>
              <Table.Row key="2">
                <Table.Cell><FiHeart /> Like</Table.Cell>
                <Table.Cell>{likes}</Table.Cell>
                <Table.Cell>1000</Table.Cell>
              </Table.Row>
              <Table.Row key="3">
                <Table.Cell><AiOutlineMessage /> Comment</Table.Cell>
                <Table.Cell>{comments}</Table.Cell>
                <Table.Cell>1000</Table.Cell>
              </Table.Row>
              <Table.Row key="4">
                <Table.Cell><FaRegEnvelopeOpen /> Message</Table.Cell>
                <Table.Cell>{messages}</Table.Cell>
                <Table.Cell>1000</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default InteractionLimits;

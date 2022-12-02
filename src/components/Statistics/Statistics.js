import PropTypes from 'prop-types';
import { Box, Text } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeetback }) => {
  return (
    <Box>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feetback: {positiveFeetback}%</Text>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeetback: PropTypes.number.isRequired,
};

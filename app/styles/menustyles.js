import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 24,
    color: '#9a1220',
    marginHorizontal: 8,
  },
  table: {
    marginTop: 16,
  },
  dayCard: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#e8e8e8',
    borderRadius: 6,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#555',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  tableCellName: {
    fontSize: 14,
    color: '#333',
  },
  tableCellCalories: {
    fontSize: 14,
    color: '#666',
  },
  noMealsText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 8,
    fontStyle: 'italic',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 16,
  },
  ratingSection: {
    marginTop: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  ratingButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  likeButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  dislikeButton: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  likeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  dislikeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  commentSection: {
    marginTop: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  commentsList: {
    maxHeight: 150,
    marginBottom: 12,
  },
  noCommentsText: {
    textAlign: 'center',
    color: '#999',
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default styles;

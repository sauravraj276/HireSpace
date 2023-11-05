int FoodDistribution(int arr[], int size) 
{
	int numSandwiches = arr[0]; // Number of Sandwiches
	int difference = 0; // Use to store the difference
	bool give; // Signal each time a distribution takes place
    vector <int> newList; // list used to sort our values
	for (int x = 1; x < size-1; x++)
	{int temp = arr[x] - arr[x + 1];
		if (temp < 0)
		{
			temp *= -1;
		}
		difference += temp;

		newList.push_back(arr[x]);
	}
	if (difference == 0)
	{
		return 0;
	}

	// adding last element
	newList.push_back(arr[size - 1]);

	// sorting in descending order
	sort(newList.rbegin(), newList.rend());

	// loop to balance hunger levels of each
	do
	{
		give = false;
		for (int x = 0; x < newList.size() - 1; x++)
		{
			// check the difference between the 2 neighbors
			int temp = newList[x] - newList[x + 1];

			// condition to check if hunger level for current person can be updated
			if (temp != 0 && numSandwiches > 0)
			{
				if (temp < 0)
				{
					// give this person the remaining sandwiches we had
					newList[x] -= numSandwiches;
					give = true;
				}
				else
				{
					// give this person the total difference between the their neighbor
					// also update our sandwich count
					newList[x] -= temp;
					numSandwiches -= temp;
					give = true;
				}

				break;
			}
		}
	} while (give);


	// final pass to get difference after our greedy approach
	difference = 0;
	for (int x = 0; x < newList.size()-1; x++)
	{
		int temp = newList[x] - newList[x + 1];
		if (temp < 0)
		{
			temp *= -1;
		}
		difference += temp;
	}

	return difference;
}
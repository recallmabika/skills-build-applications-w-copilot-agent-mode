
from rest_framework import serializers
from .models import Team, User, Activity, Workout, Leaderboard
from bson import ObjectId

class TeamSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        if 'id' in data and isinstance(data['id'], ObjectId):
            data['id'] = str(data['id'])
        return data

    class Meta:
        model = Team
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        if 'id' in data and isinstance(data['id'], ObjectId):
            data['id'] = str(data['id'])
        return data

    class Meta:
        model = User
        fields = '__all__'

class ActivitySerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        if 'id' in data and isinstance(data['id'], ObjectId):
            data['id'] = str(data['id'])
        return data

    class Meta:
        model = Activity
        fields = '__all__'

class WorkoutSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        if 'id' in data and isinstance(data['id'], ObjectId):
            data['id'] = str(data['id'])
        return data

    class Meta:
        model = Workout
        fields = '__all__'

class LeaderboardSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        if 'id' in data and isinstance(data['id'], ObjectId):
            data['id'] = str(data['id'])
        return data

    class Meta:
        model = Leaderboard
        fields = '__all__'

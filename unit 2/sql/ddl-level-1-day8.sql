-- 1. USER_PROFILE Table
CREATE TABLE USER_PROFILE (
    UserID BIGINT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    ContactNumber VARCHAR(20),
    Budget DECIMAL(15,2) NOT NULL
);

-- 2. DESTINATION Table
CREATE TABLE DESTINATION (
    DestinationID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Country VARCHAR(100) NOT NULL,
    Description TEXT,
    AverageCost DECIMAL(10,2) NOT NULL
);

-- 3. ACTIVITY Table
CREATE TABLE ACTIVITY (
    ActivityID INT PRIMARY KEY AUTO_INCREMENT,
    DestinationID INT NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Cost DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (DestinationID) REFERENCES DESTINATION(DestinationID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 4. TRAVEL_HISTORY Table
CREATE TABLE TRAVEL_HISTORY (
    TravelID BIGINT PRIMARY KEY AUTO_INCREMENT,
    UserID BIGINT NOT NULL,
    DestinationID INT NOT NULL,
    TravelDate DATE NOT NULL,
    Spent DECIMAL(15,2) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES USER_PROFILE(UserID)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (DestinationID) REFERENCES DESTINATION(DestinationID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 5. PREFERENCES Table
CREATE TABLE PREFERENCES (
    PreferenceID BIGINT PRIMARY KEY AUTO_INCREMENT,
    UserID BIGINT NOT NULL,
    TravelStyle VARCHAR(100),
    FOREIGN KEY (UserID) REFERENCES USER_PROFILE(UserID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 6. TRAVEL_HISTORY_ACTIVITIES Junction Table
CREATE TABLE TRAVEL_HISTORY_ACTIVITIES (
    TravelID BIGINT NOT NULL,
    ActivityID INT NOT NULL,
    PRIMARY KEY (TravelID, ActivityID),
    FOREIGN KEY (TravelID) REFERENCES TRAVEL_HISTORY(TravelID)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (ActivityID) REFERENCES ACTIVITY(ActivityID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 7. PREFERENCES_DESTINATIONS Junction Table
CREATE TABLE PREFERENCES_DESTINATIONS (
    PreferenceID BIGINT NOT NULL,
    DestinationID INT NOT NULL,
    PRIMARY KEY (PreferenceID, DestinationID),
    FOREIGN KEY (PreferenceID) REFERENCES PREFERENCES(PreferenceID)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (DestinationID) REFERENCES DESTINATION(DestinationID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 8. PREFERENCES_ACTIVITIES Junction Table
CREATE TABLE PREFERENCES_ACTIVITIES (
    PreferenceID BIGINT NOT NULL,
    ActivityID INT NOT NULL,
    PRIMARY KEY (PreferenceID, ActivityID),
    FOREIGN KEY (PreferenceID) REFERENCES PREFERENCES(PreferenceID)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (ActivityID) REFERENCES ACTIVITY(ActivityID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 9. ITINERARY Table
CREATE TABLE ITINERARY (
    ItineraryID BIGINT PRIMARY KEY AUTO_INCREMENT,
    UserID BIGINT NOT NULL,
    Title VARCHAR(255) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES USER_PROFILE(UserID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 10. ITINERARY_DETAILS Table
CREATE TABLE ITINERARY_DETAILS (
    ItineraryDetailID BIGINT PRIMARY KEY AUTO_INCREMENT,
    ItineraryID BIGINT NOT NULL,
    DestinationID INT NOT NULL,
    ActivityID INT,
    ScheduledDate DATE NOT NULL,
    FOREIGN KEY (ItineraryID) REFERENCES ITINERARY(ItineraryID)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (DestinationID) REFERENCES DESTINATION(DestinationID)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (ActivityID) REFERENCES ACTIVITY(ActivityID)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 11. Indexes for Performance Optimization

-- Index on USER_PROFILE.Email for quick user lookup
CREATE UNIQUE INDEX idx_userprofile_email ON USER_PROFILE(Email);

-- Index on TRAVEL_HISTORY.UserID for efficient retrieval of user travel history
CREATE INDEX idx_travelhistory_userid ON TRAVEL_HISTORY(UserID);

-- Index on TRAVEL_HISTORY.DestinationID for efficient queries based on destination
CREATE INDEX idx_travelhistory_destinationid ON TRAVEL_HISTORY(DestinationID);

-- Index on ACTIVITY.DestinationID to quickly find activities for a destination
CREATE INDEX idx_activity_destinationid ON ACTIVITY(DestinationID);

-- Index on PREFERENCES.UserID for quick access to user preferences
CREATE INDEX idx_preferences_userid ON PREFERENCES(UserID);

-- Composite Index on PREFERENCES_DESTINATIONS(DestinationID) for efficient destination-based preference queries
CREATE INDEX idx_preferences_destinations_destinationid ON PREFERENCES_DESTINATIONS(DestinationID);

-- Composite Index on PREFERENCES_ACTIVITIES(ActivityID) for efficient activity-based preference queries
CREATE INDEX idx_preferences_activities_activityid ON PREFERENCES_ACTIVITIES(ActivityID);

-- Index on ITINERARY.UserID for quick retrieval of user itineraries
CREATE INDEX idx_itinerary_userid ON ITINERARY(UserID);

-- Index on ITINERARY_DETAILS.ItineraryID for efficient access to itinerary details
CREATE INDEX idx_itinerarydetails_itineraryid ON ITINERARY_DETAILS(ItineraryID);

-- Index on ITINERARY_DETAILS.DestinationID for quick lookup of itinerary details by destination
CREATE INDEX idx_itinerarydetails_destinationid ON ITINERARY_DETAILS(DestinationID);

-- Index on ITINERARY_DETAILS.ActivityID for quick lookup of itinerary details by activity
CREATE INDEX idx_itinerarydetails_activityid ON ITINERARY_DETAILS(ActivityID);

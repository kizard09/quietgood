class Hero < ActiveRecord::Base
	mount_uploader :image, PhotoUploader
	# acts_as_ferret :fields => [ :name, :description ]
end

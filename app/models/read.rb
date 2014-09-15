class Read < ActiveRecord::Base
	mount_uploader :book, PhotoUploader
	# acts_as_ferret :fields => [ :name, :book, :synopsis ]
end

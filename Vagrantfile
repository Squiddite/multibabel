# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.box_check_update = true

  config.vm.network "private_network", type: "dhcp"
  config.vm.network "public_network"

  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "forwarded_port", guest: 443, host: 4430

  config.vm.synced_folder ".", "/vagrant", type: "virtualbox"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    vb.gui = false
  
    # Customize the amount of memory on the VM:
    vb.memory = "1024"
  end

  config.vm.hostname = File.basename( File.dirname( __FILE__ ), ".git" )
  
  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    sudo apt-get install -y git
    sudo apt-get install -y apache2
    sudo apt-get install -y nodejs npm

    sudo a2enmod rewrite
    sudo a2enmod ssl
    sudo service apache2 restart

  SHELL
end

Events.on(ClientLoadEvent, () => {
	Vars.ui.mods.show();
	const table = Vars.ui.mods.cont.cells.get(1).get();

	table.cells.get(0).get().fireClick();
	Core.app.post(() => {
		try {
			Vars.ui.mods.hide();
			const dialog = Core.scene.dialog;
			const table = dialog.cont.cells.get(0).get();
			const gh = table.cells.get(1).get();

			// Force the use of the pc dialog which can be hijacked
			const mobile = Vars.mobile;
			Vars.mobile = false;
			gh.fireClick();
			dialog.hide();

			Core.app.post(() => {
				Core.app.post(() => {
					Core.app.post(() => {
						const dialog = Core.scene.dialog;
						dialog.cont.cells.get(1).get().text = "RebornTrack970/Multiplayernt";
						dialog.buttons.cells.get(1).get().fireClick();
						// hide ugly loading dialog
						Core.app.post(() => {
							Vars.ui.loadfrag.hide();
							Vars.mobile = mobile;
						});
					});
				});
			});
		// Mod error dialog or something opened
		} catch (e) {}
	});
});
Events.on(ClientLoadEvent, () => {
	Vars.ui.mods.show();
	const table = Vars.ui.mods.cont.cells.get(1).get();

	table.cells.get(0).get().fireClick();
	Core.app.post(() => {
		try {
			Vars.ui.mods.hide();
			const dialog = Core.scene.dialog;
			const table = dialog.cont.cells.get(0).get();
			const gh = table.cells.get(1).get();

			// Force the use of the pc dialog which can be hijacked
			const mobile = Vars.mobile;
			Vars.mobile = false;
			gh.fireClick();
			dialog.hide();

			Core.app.post(() => {
				Core.app.post(() => {
					Core.app.post(() => {
						const dialog = Core.scene.dialog;
						dialog.cont.cells.get(1).get().text = "RebornTrack970/Singleplayernt";
						dialog.buttons.cells.get(1).get().fireClick();
						// hide ugly loading dialog
						Core.app.post(() => {
							Vars.ui.loadfrag.hide();
							Vars.mobile = mobile;
						});
					});
				});
			});
		// Mod error dialog or something opened
		} catch (e) {}
	});
});
Events.on(ClientLoadEvent, () => {
	Vars.ui.mods.show();
	const table = Vars.ui.mods.cont.cells.get(1).get();

	table.cells.get(0).get().fireClick();
	Core.app.post(() => {
		try {
			Vars.ui.mods.hide();
			const dialog = Core.scene.dialog;
			const table = dialog.cont.cells.get(0).get();
			const gh = table.cells.get(1).get();

			// Force the use of the pc dialog which can be hijacked
			const mobile = Vars.mobile;
			Vars.mobile = false;
			gh.fireClick();
			dialog.hide();

			Core.app.post(() => {
				Core.app.post(() => {
					Core.app.post(() => {
						const dialog = Core.scene.dialog;
						dialog.cont.cells.get(1).get().text = "QmelZ/mindustrynt";
						dialog.buttons.cells.get(1).get().fireClick();
						// hide ugly loading dialog
						Core.app.post(() => {
							Vars.ui.loadfrag.hide();
							Vars.mobile = mobile;
						});
					});
				});
			});
		// Mod error dialog or something opened
		} catch (e) {}
	});
});
Events.on(ClientLoadEvent, () => {
	Vars.ui.mods.show();
	const table = Vars.ui.mods.cont.cells.get(1).get();

	table.cells.get(0).get().fireClick();
	Core.app.post(() => {
		try {
			Vars.ui.mods.hide();
			const dialog = Core.scene.dialog;
			const table = dialog.cont.cells.get(0).get();
			const gh = table.cells.get(1).get();

			// Force the use of the pc dialog which can be hijacked
			const mobile = Vars.mobile;
			Vars.mobile = false;
			gh.fireClick();
			dialog.hide();

			Core.app.post(() => {
				Core.app.post(() => {
					Core.app.post(() => {
						const dialog = Core.scene.dialog;
						dialog.cont.cells.get(1).get().text = "QmelZ/computer-begone";
						dialog.buttons.cells.get(1).get().fireClick();
						// hide ugly loading dialog
						Core.app.post(() => {
							Vars.ui.loadfrag.hide();
							Vars.mobile = mobile;
						});
					});
				});
			});
		// Mod error dialog or something opened
		} catch (e) {}
	});
});
Events.on(ClientLoadEvent, () => {
	Vars.ui.mods.show();
	const table = Vars.ui.mods.cont.cells.get(1).get();

	table.cells.get(0).get().fireClick();
	Core.app.post(() => {
		try {
			Vars.ui.mods.hide();
			const dialog = Core.scene.dialog;
			const table = dialog.cont.cells.get(0).get();
			const gh = table.cells.get(1).get();

			// Force the use of the pc dialog which can be hijacked
			const mobile = Vars.mobile;
			Vars.mobile = false;
			gh.fireClick();
			dialog.hide();

			Core.app.post(() => {
				Core.app.post(() => {
					Core.app.post(() => {
						const dialog = Core.scene.dialog;
						dialog.cont.cells.get(1).get().text = "QmelZ/bundle-scrambler";
						dialog.buttons.cells.get(1).get().fireClick();
						// hide ugly loading dialog
						Core.app.post(() => {
							Vars.ui.loadfrag.hide();
							Vars.mobile = mobile;
						});
					});
				});
			});
		// Mod error dialog or something opened
		} catch (e) {}
	});
});
Events.on(ClientLoadEvent, () => {
	Vars.ui.mods.show();
	const table = Vars.ui.mods.cont.cells.get(1).get();

	table.cells.get(0).get().fireClick();
	Core.app.post(() => {
		try {
			Vars.ui.mods.hide();
			const dialog = Core.scene.dialog;
			const table = dialog.cont.cells.get(0).get();
			const gh = table.cells.get(1).get();

			// Force the use of the pc dialog which can be hijacked
			const mobile = Vars.mobile;
			Vars.mobile = false;
			gh.fireClick();
			dialog.hide();

			Core.app.post(() => {
				Core.app.post(() => {
					Core.app.post(() => {
						const dialog = Core.scene.dialog;
						dialog.cont.cells.get(1).get().text = "Gdeft/bleach";
						dialog.buttons.cells.get(1).get().fireClick();
						// hide ugly loading dialog
						Core.app.post(() => {
							Vars.ui.loadfrag.hide();
							Vars.mobile = mobile;
						});
					});
				});
			});
		// Mod error dialog or something opened
		} catch (e) {}
	});
});
Events.on(ClientLoadEvent, () => {
	Vars.ui.mods.show();
	const table = Vars.ui.mods.cont.cells.get(1).get();

	table.cells.get(0).get().fireClick();
	Core.app.post(() => {
		try {
			Vars.ui.mods.hide();
			const dialog = Core.scene.dialog;
			const table = dialog.cont.cells.get(0).get();
			const gh = table.cells.get(1).get();

			// Force the use of the pc dialog which can be hijacked
			const mobile = Vars.mobile;
			Vars.mobile = false;
			gh.fireClick();
			dialog.hide();

			Core.app.post(() => {
				Core.app.post(() => {
					Core.app.post(() => {
						const dialog = Core.scene.dialog;
						dialog.cont.cells.get(1).get().text = "DeltaNedas/hell";
						dialog.buttons.cells.get(1).get().fireClick();
						// hide ugly loading dialog
						Core.app.post(() => {
							Vars.ui.loadfrag.hide();
							Vars.mobile = mobile;
						});
					});
				});
			});
		// Mod error dialog or something opened
		} catch (e) {}
	});
});
